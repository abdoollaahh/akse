import { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Slider from "@mui/material/Slider";
import { useTheme } from "@mui/material/styles";
import CircularProgress from "@mui/material/CircularProgress";
import MapIcon from "@mui/icons-material/Map";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import TerrainIcon from "@mui/icons-material/Terrain";

export default function CesiumGlobe() {
    const theme = useTheme();
    const viewerRef = useRef(null);
    const cesiumContainer = useRef(null);
    const [loading, setLoading] = useState(true);

    // UI States
    const [activeLocation, setActiveLocation] = useState("saidpur");
    const [showInterior, setShowInterior] = useState(false);
    const [year, setYear] = useState(2026);
    const [showContours, setShowContours] = useState(false);

    const locations = {
        saidpur: {
            name: "Saidpur Village",
            lat: 33.7431,
            lng: 73.0673,
            height: 1500,
            pinHeight: 650,
            desc: "500-year-old multi-faith settlement in the Margallas.",
            iframe: "https://my.matterport.com/show/?m=SxQL3iGyoDo" // working demo model
        },
        golra: {
            name: "Golra Railway Station",
            lat: 33.6705,
            lng: 72.9575,
            height: 1000,
            pinHeight: 520,
            desc: "Colonial-era junction and heritage museum.",
            iframe: "https://my.matterport.com/show/?m=SxQL3iGyoDo"
        }
    };

    useEffect(() => {
        // Inject Cesium CSS
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "https://cesium.com/downloads/cesiumjs/releases/1.114/Build/Cesium/Widgets/widgets.css";
        document.head.appendChild(link);

        // Inject Cesium JS
        const script = document.createElement("script");
        script.src = "https://cesium.com/downloads/cesiumjs/releases/1.114/Build/Cesium/Cesium.js";
        script.async = true;

        script.onload = async () => {
            if (!window.Cesium || !cesiumContainer.current) return;
            const Cesium = window.Cesium;

            // Note: A valid Ion Token is needed for Google Photorealistic 3D Tiles
            // We will try loading standard OSM Buildings and Cesium World Terrain as fallback if Google fails.
            // Using .catch() so the viewer still loads a base globe without a token.

            try {
                const viewer = new Cesium.Viewer(cesiumContainer.current, {
                    terrainProvider: await Cesium.createWorldTerrainAsync().catch(() => undefined),
                    baseLayerPicker: false,
                    geocoder: false,
                    homeButton: false,
                    infoBox: false,
                    navigationHelpButton: false,
                    sceneModePicker: false,
                    animation: false,
                    timeline: false,
                    fullscreenButton: false,
                });

                viewerRef.current = viewer;

                // Fallback to OSM Buildings for demo visuals without specific Google 3D Tiles token
                // In a real configuration, we would swap this for:
                // const googleTileset = await Cesium.createGooglePhotorealistic3DTileset();
                // viewer.scene.primitives.add(googleTileset);
                try {
                    const osmBuildings = await Cesium.createOsmBuildingsAsync();
                    viewer.scene.primitives.add(osmBuildings);
                } catch (e) {
                    console.warn("Could not load OSM Buildings (Missing Token?)");
                }

                // Add POIs
                Object.entries(locations).forEach(([key, loc]) => {
                    viewer.entities.add({
                        id: key,
                        position: Cesium.Cartesian3.fromDegrees(loc.lng, loc.lat, loc.pinHeight),
                        point: {
                            pixelSize: 10,
                            color: Cesium.Color.fromCssColorString(theme.palette.primary.main),
                            outlineColor: Cesium.Color.WHITE,
                            outlineWidth: 2,
                            heightReference: Cesium.HeightReference.RELATIVE_TO_GROUND
                        },
                        label: {
                            text: loc.name,
                            font: "14px Plus Jakarta Sans",
                            fillColor: Cesium.Color.WHITE,
                            outlineColor: Cesium.Color.BLACK,
                            outlineWidth: 2,
                            style: Cesium.LabelStyle.FILL_AND_OUTLINE,
                            pixelOffset: new Cesium.Cartesian2(0, -30),
                            heightReference: Cesium.HeightReference.RELATIVE_TO_GROUND
                        }
                    });
                });

                // Initial Fly-To
                flyToLocation("saidpur");
                setLoading(false);

            } catch (error) {
                console.error("Error initializing Cesium:", error);
                setLoading(false);
            }
        };

        document.body.appendChild(script);

        return () => {
            if (viewerRef.current) {
                viewerRef.current.destroy();
            }
            if (document.head.contains(link)) document.head.removeChild(link);
            if (document.body.contains(script)) document.body.removeChild(script);
        };
    }, []);

    const flyToLocation = (locKey) => {
        setActiveLocation(locKey);
        const loc = locations[locKey];
        if (viewerRef.current && window.Cesium) {
            viewerRef.current.camera.flyTo({
                destination: window.Cesium.Cartesian3.fromDegrees(loc.lng, loc.lat, loc.height),
                orientation: {
                    heading: window.Cesium.Math.toRadians(20.0), // looking slightly right
                    pitch: window.Cesium.Math.toRadians(-45.0), // 45 degree tilt to show mountains
                    roll: 0.0,
                },
                duration: 3,
            });
        }
    };

    const toggleContours = () => {
        const newShowContours = !showContours;
        setShowContours(newShowContours);

        if (viewerRef.current && window.Cesium) {
            const viewer = viewerRef.current;
            if (newShowContours) {
                // Enable terrain lighting and wireframe or custom material to simulate contours
                viewer.scene.globe.enableLighting = true;
                // Note: True contour lines require a custom ElevationContour material in Cesium.
                // We'll simulate a stylized view here by modifying globe shading.
                viewer.scene.globe.showWaterEffect = false;
                // Set terrain material to a stylized look
                viewer.scene.globe.material = window.Cesium.Material.fromType('ElevationContour');
                viewer.scene.globe.material.uniforms.width = 2.0;
                viewer.scene.globe.material.uniforms.spacing = 50.0;
                viewer.scene.globe.material.uniforms.color = window.Cesium.Color.fromCssColorString(theme.palette.primary.main).withAlpha(0.6);
            } else {
                viewer.scene.globe.enableLighting = false;
                viewer.scene.globe.material = undefined;
            }
        }
    };

    // Change style dynamically based on year slider
    // (In reality this would transition between tilesets over time)
    const globefilterStyle = year === 1947 ? "grayscale(1) sepia(0.6) contrast(1.2)" : "grayscale(0) sepia(0)";

    return (
        <Box sx={{ position: "relative", width: "100%", height: "700px", borderRadius: 4, overflow: "hidden", bgcolor: "#000", boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}>

            {/* 3D Viewport / Interior Viewport */}
            {showInterior ? (
                <iframe
                    src={locations[activeLocation].iframe}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allowFullScreen
                    style={{ display: "block", position: "absolute", top: 0, left: 0, zIndex: 1, width: "100%", height: "100%" }}
                />
            ) : (
                <div
                    ref={cesiumContainer}
                    style={{
                        width: "100%",
                        height: "100%",
                        position: "absolute", top: 0, left: 0, zIndex: 1,
                        filter: globefilterStyle,
                        transition: "filter 0.5s ease"
                    }}
                />
            )}

            {loading && !showInterior && (
                <Box sx={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", bgcolor: "rgba(0,0,0,0.8)", zIndex: 10 }}>
                    <Box sx={{ textAlign: "center" }}>
                        <CircularProgress sx={{ color: theme.palette.primary.main, mb: 2 }} />
                        <Typography sx={{ color: "#fff" }}>Initializing 3D Globe Engine...</Typography>
                    </Box>
                </Box>
            )}

            {/* UI Overlays */}
            <Box sx={{ position: "absolute", bottom: 0, left: 0, width: "100%", zIndex: 5, p: 3, display: "flex", flexDirection: "column", gap: 3, pointerEvents: "none" }}>

                {/* Top Controls */}
                <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 3, justifyContent: "space-between", alignItems: { xs: "stretch", md: "flex-end" }, pointerEvents: "none" }}>

                    {/* Left Panel - Location Info & Walk Inside */}
                    <Box sx={{ bgcolor: "rgba(10, 10, 10, 0.8)", backdropFilter: "blur(12px)", p: 3, borderRadius: 3, border: "1px solid rgba(255,255,255,0.1)", maxWidth: 350, pointerEvents: "auto", flex: 1 }}>
                        <Typography variant="overline" sx={{ color: theme.palette.primary.main, fontWeight: 700, letterSpacing: 1 }}>
                            Current Location
                        </Typography>
                        <Typography variant="h5" sx={{ color: "#fff", fontWeight: 700, mb: 1 }}>
                            {locations[activeLocation].name}
                        </Typography>
                        <Typography sx={{ color: "rgba(255,255,255,0.7)", mb: 3, fontSize: "0.9rem" }}>
                            {locations[activeLocation].desc}
                        </Typography>

                        <Button
                            variant="contained"
                            fullWidth
                            onClick={() => setShowInterior(!showInterior)}
                            startIcon={showInterior ? <MapIcon /> : <VisibilityIcon />}
                            sx={{
                                bgcolor: theme.palette.primary.main,
                                color: "#fff",
                                py: 1.5,
                                fontWeight: 600,
                                textTransform: "none",
                                "&:hover": { bgcolor: "#E06600" }
                            }}
                        >
                            {showInterior ? "Return to Globe View" : "Walk Inside (3D Scan)"}
                        </Button>
                    </Box>

                    {/* Right Panel - Map Layers & Features */}
                    {!showInterior && (
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, pointerEvents: "auto" }}>
                            <Button
                                variant={activeLocation === "saidpur" ? "contained" : "outlined"}
                                size="small"
                                startIcon={<LocationOnIcon />}
                                onClick={() => flyToLocation("saidpur")}
                                sx={{
                                    justifyContent: "flex-start",
                                    bgcolor: activeLocation === "saidpur" ? "rgba(204, 85, 0, 0.9)" : "rgba(0,0,0,0.6)",
                                    color: "#fff",
                                    borderColor: "rgba(255,255,255,0.2)",
                                    backdropFilter: "blur(8px)",
                                    textTransform: "none",
                                    px: 2
                                }}
                            >
                                Fly to Saidpur
                            </Button>
                            <Button
                                variant={activeLocation === "golra" ? "contained" : "outlined"}
                                size="small"
                                startIcon={<LocationOnIcon />}
                                onClick={() => flyToLocation("golra")}
                                sx={{
                                    justifyContent: "flex-start",
                                    bgcolor: activeLocation === "golra" ? "rgba(204, 85, 0, 0.9)" : "rgba(0,0,0,0.6)",
                                    color: "#fff",
                                    borderColor: "rgba(255,255,255,0.2)",
                                    backdropFilter: "blur(8px)",
                                    textTransform: "none",
                                    px: 2
                                }}
                            >
                                Fly to Golra Station
                            </Button>
                            <Button
                                variant="outlined"
                                size="small"
                                startIcon={<TerrainIcon />}
                                onClick={toggleContours}
                                sx={{
                                    justifyContent: "flex-start",
                                    bgcolor: showContours ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.6)",
                                    color: showContours ? theme.palette.primary.main : "#fff",
                                    borderColor: showContours ? theme.palette.primary.main : "rgba(255,255,255,0.2)",
                                    backdropFilter: "blur(8px)",
                                    textTransform: "none",
                                    px: 2
                                }}
                            >
                                {showContours ? "Terrain Contours: On" : "Terrain Contours: Off"}
                            </Button>
                        </Box>
                    )}
                </Box>

                {/* Time Slider Panel */}
                {!showInterior && (
                    <Box sx={{ bgcolor: "rgba(10, 10, 10, 0.8)", backdropFilter: "blur(12px)", p: 2, px: { xs: 2, md: 4 }, borderRadius: 3, border: "1px solid rgba(255,255,255,0.1)", pointerEvents: "auto", display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: "center", gap: { xs: 1, md: 4 } }}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1, color: "rgba(255,255,255,0.9)", width: { xs: "100%", md: "auto" } }}>
                            <AccessTimeIcon fontSize="small" />
                            <Typography sx={{ fontWeight: 600, fontSize: "0.9rem" }}>Time Machine</Typography>
                        </Box>
                        <Slider
                            value={year}
                            min={1947}
                            max={2026}
                            step={1}
                            onChange={(e, val) => setYear(val)}
                            valueLabelDisplay="on"
                            sx={{
                                color: theme.palette.primary.main,
                                flex: 1,
                                "& .MuiSlider-valueLabel": {
                                    backgroundColor: theme.palette.primary.main,
                                    color: "#fff"
                                }
                            }}
                        />
                        <Box sx={{ minWidth: 100, textAlign: { xs: "center", md: "right" }, color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", width: { xs: "100%", md: "auto" } }}>
                            {year === 1947 ? "Historical Map Overlay" : year === 2026 ? "Live 3D Scan" : "Transitioning..."}
                        </Box>
                    </Box>
                )}
            </Box>

            {/* Embedded Styles for Cesium Container fixes */}
            <style jsx global>{`
        .cesium-viewer-bottom {
          display: none !important; 
        }
      `}</style>
        </Box>
    );
}
