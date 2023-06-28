import { Box, CssVarsProvider, IconButton, Typography } from "@mui/joy";
import { ReactComponent as ReloadIcon } from "././assets/reloadIcon.svg";
import './App.css';
import zhuyinListJSON from "./assets/zhuyinList.json";
import { DisplayZhuyinCharacter } from "./components";
import InputAnswer from "./components/InputAnswer/InputAnswer.tsx";
import { useZhuyin } from "./hooks";
import theme from "./theme.ts";


const zhuyinSize = zhuyinListJSON.length;

const titleLetters = [{ letter: "z", color: "#dd2950" },
    { letter: "h", color: "#e46653" },
    { letter: "u", color: "#ebe256" },
    { letter: "y", color: "#9fe369" },
    { letter: "i", color: "#4ba990" },
    { letter: "n", color: "#22c9ec" },
    { letter: " ", color: "#f5d547" },
    { letter: "d", color: "#5d5681" },
    { letter: "r", color: "#6b23d2" },
    { letter: "i", color: "#dc1dde" },
    { letter: "l", color: "#e6b98e" },
    { letter: "l", color: "#47b4e5" },
];


function App() {
    const {
        numberOfZhuyinCharactersLeft,
        resetList
    } = useZhuyin();


    return (
        <CssVarsProvider theme={theme}>
            <Box sx={{
                backgroundColor: "var(--joy-palette-background-body)",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
            }}>

                <Box component="header" sx={{
                    padding: "20px 0",
                    marginBottom: "10%"
                }}>
                    <Typography component="h1" sx={{
                        fontFamily: "\"Ramyoon\", sans-serif",
                        margin: "0",
                        fontSize: "4rem",
                        fontWeight: "normal",
                        WebkitTextStrokeWidth: "2px",
                        MozTextStrokeWidth: "2px",
                        WebkitTextStrokeColor: "#eee3f5",
                        MozTextStrokeColor: "#eee3f5",
                        color: "transparent"
                    }}>{titleLetters.map(({ letter, color }) => <span
                        style={{ textShadow: `6px 6px ${color}` }}>{letter}</span>)}</Typography>
                    <IconButton sx={{
                        position: "absolute",
                        right: "10px",
                        top: "10px"
                    }} onClick={resetList}><ReloadIcon /></IconButton>
                </Box>
                <Box sx={{
                    flex: "1",
                    width: "90%",
                    maxWidth: "350px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}>
                    <DisplayZhuyinCharacter />
                    <InputAnswer />
                    <Typography> {zhuyinSize - numberOfZhuyinCharactersLeft} / {zhuyinSize} </Typography>
                </Box>
            </Box>
        </CssVarsProvider>
    );
}

export default App;
