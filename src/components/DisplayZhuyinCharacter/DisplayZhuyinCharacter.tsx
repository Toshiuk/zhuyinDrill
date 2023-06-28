import { Box, Typography } from "@mui/joy";
import { FC } from 'react';
import { useZhuyin } from "../../hooks";

const DisplayZhuyinCharacter: FC = () => {
    const {
        zhuyinCharacter,
        skipping
    } = useZhuyin();

    return (
        <Box sx={{
            minHeight: "160px",
            textAlign: "center",
            position: "relative"
        }}>
            <Typography component="span" sx={{
                fontSize: "min(40vmin, 106px)",
                opacity: skipping ? "0" : "1",
                transition: "all 0.4s ease-in"
            }}>{zhuyinCharacter?.zhuyin}</Typography>
            <Typography component="span" sx={{
                fontSize: "min(40vmin, 106px)",
                width: "100%",
                position: "absolute",
                transform: skipping ? "translate(0, -160px)" : "translate(0, -260px)",
                left: "0",
                transition: skipping ? "all 0.4s ease-in-out" : "none",
                opacity: skipping ? "1" : "0"
            }}>{zhuyinCharacter?.pinyin}</Typography>
        </Box>
    );
};

export default DisplayZhuyinCharacter;