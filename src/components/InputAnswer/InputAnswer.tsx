import { IconButton, Input, Stack } from "@mui/joy";
import { FC, KeyboardEvent, useState } from "react";
import { ReactComponent as SkipIcon } from "../../assets/skipIcon.svg";
import wordList from "../../assets/zhuyinList.json";
import { useZhuyin } from "../../hooks";

const InputAnswer: FC = () => {
    const [value, setValue] = useState("");
    const [disabled, setDisabled] = useState(false);

    const {
        onGuess,
        onSkip,
        incorrect,
        correct
    } = useZhuyin();

    const resetValue = () => {
        setTimeout(() => {
            setValue("");
            setDisabled(false);
        }, 800);
    };

    const onBlur = () => {
        const trimmedValue = value.trim();
        if (!trimmedValue) return;
        setDisabled(true);

        const found = wordList.find(word => word.pinyin === trimmedValue);
        if (found) {
            setValue(found.zhuyin);
        }

        onGuess(found?.zhuyin);

        resetValue();
    };

    const handleSkip = () => {
        setDisabled(true);
        onSkip();
        resetValue();
    };


    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Enter") {
            onBlur();
        }
    };

    return (
        <Stack direction="row" spacing={1}>
            <Input
                placeholder="Answer"
                onChange={(event) => setValue(event.target.value)}
                onBlur={onBlur}
                value={value}
                color={incorrect ? "warning" : correct ? "success" : "neutral"}
                onKeyDown={handleKeyDown}
            />
            <IconButton onClick={handleSkip} disabled={disabled}><SkipIcon /></IconButton>
        </Stack>
    );
};

export default InputAnswer;