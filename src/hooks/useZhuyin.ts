import { useContext } from "react";

import { ZhuyinContext, ZhuyinProviderProps } from "../providers/ZhuyinProvider.tsx";

type UseZhuyinProps = Omit<ZhuyinProviderProps, "onCorrect" | "onIncorrect"> & {
    onGuess: (value?: string) => Promise<void>;
    correct: boolean;
    incorrect: boolean;
    skipping: boolean;
};

const useZhuyin = (): UseZhuyinProps => {
    const {
        zhuyinCharacter,
        setRandomZhuyinCharacter,
        numberOfZhuyinCharactersLeft,
        numberOfZhuyinCharactersLeftOnLevel,
        resetList,
        correct,
        incorrect,
        skipping,
        onCorrect,
        onIncorrect,
        onSkip,
    } = useContext(ZhuyinContext);

    const handleGuess = async (value?: string) => {
        if (!!value && value === zhuyinCharacter?.zhuyin) {
            onCorrect();
        } else {
            onIncorrect();
        }
    };

    return {
        zhuyinCharacter,
        setRandomZhuyinCharacter,
        numberOfZhuyinCharactersLeft,
        numberOfZhuyinCharactersLeftOnLevel,
        resetList,
        onGuess: handleGuess,
        onSkip,
        correct,
        incorrect,
        skipping,
    };
};

export default useZhuyin;