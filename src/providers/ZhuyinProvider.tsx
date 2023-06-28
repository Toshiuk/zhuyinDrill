/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, FC, PropsWithChildren, useEffect, useMemo, useState } from "react";
import { useLocalStorage } from "react-use";
import zhuyinListJSON from "../assets/zhuyinList.json";


export type ZhuyinProviderProps = {
    zhuyinCharacter?: ZhuyinCharacter,
    setRandomZhuyinCharacter: () => void,
    numberOfZhuyinCharactersLeft: number,
    numberOfZhuyinCharactersLeftOnLevel: number,
    resetList: () => void,
    correct: boolean;
    incorrect: boolean;
    skipping: boolean;
    onCorrect: () => void;
    onIncorrect: () => void;
    onSkip: () => void;
};

const defaultZhuyinProvider: ZhuyinProviderProps = {
    setRandomZhuyinCharacter: () => {
    },
    numberOfZhuyinCharactersLeft: 0,
    numberOfZhuyinCharactersLeftOnLevel: 0,
    resetList: () => {
    },
    correct: false,
    incorrect: false,
    skipping: false,
    onCorrect: () => {
    },
    onIncorrect: () => {
    },
    onSkip: () => {
    }
};

export const ZhuyinContext = createContext<ZhuyinProviderProps>(defaultZhuyinProvider);

const ZHUYIN_KEY = "zhuyinList";
const ZhuyinProvider: FC<PropsWithChildren> = ({ children }) => {
    const [zhuyinList, setZhuyinList] = useLocalStorage<ZhuyinCharacter[]>(ZHUYIN_KEY, zhuyinListJSON);
    const [correct, setCorrect] = useState(false);
    const [incorrect, setIncorrect] = useState(false);
    const [skipping, setSkipping] = useState(false);
    const [zhuyinCharacter, setZhuyinCharacter] = useState<ZhuyinCharacter>();

    const getZhuyinListOnLevel = (): ZhuyinCharacter[] => {
        if (!zhuyinList) return [];
        const zhuyinListLevel1 = zhuyinList.filter((zhuyinCharacter) => zhuyinCharacter.zhuyin.length === 1);
        if (zhuyinListLevel1.length) return zhuyinListLevel1;
        const zhuyinListLevel2 = zhuyinList.filter((zhuyinCharacter) => zhuyinCharacter.zhuyin.length === 2);
        if (zhuyinListLevel2.length) return zhuyinListLevel2;
        return zhuyinList;

    };
    const getRandomZhuyinCharacter = () => {
        if (!zhuyinList) return;
        let filteredZhuyinList = getZhuyinListOnLevel();
        if (filteredZhuyinList.length > 1) {
            filteredZhuyinList = filteredZhuyinList.filter((zhuyin) => zhuyin.zhuyin !== zhuyinCharacter?.zhuyin);
        }
        return filteredZhuyinList[Math.floor(Math.random() * filteredZhuyinList.length)];
    };

    const resetList = () => {
        setZhuyinList(zhuyinListJSON);
    };

    useEffect(() => {
        setZhuyinCharacter(getRandomZhuyinCharacter());
    }, [zhuyinList]);

    const nextZhuyin = () => {
        setZhuyinList(zhuyinList?.filter((zhuyin) => zhuyin.zhuyin !== zhuyinCharacter?.zhuyin));
    };

    const handleCorrect = () => {
        setCorrect(true);
    };

    const handleIncorrect = () => {
        setIncorrect(true);
    };

    const handleSkip = () => {
        setSkipping(true);
    };

    const setRandomZhuyinCharacter = () => {
        setZhuyinCharacter(getRandomZhuyinCharacter());
    };

    useEffect(() => {
        if (correct) {
            setTimeout(() => {
                setCorrect(false);
                nextZhuyin();
            }, 600);
        }
    }, [correct]);

    useEffect(() => {
        if (incorrect) {
            setTimeout(() => {
                setIncorrect(false);
            }, 800);
        }
    }, [incorrect]);

    useEffect(() => {
        if (skipping) {
            setTimeout(() => {
                setSkipping(false);
                setRandomZhuyinCharacter();
            }, 800);
        }
    }, [skipping]);

    const contextValue = useMemo<ZhuyinProviderProps>(() => ({
        zhuyinCharacter,
        setRandomZhuyinCharacter,
        numberOfZhuyinCharactersLeft: zhuyinList?.length || 0,
        numberOfZhuyinCharactersLeftOnLevel: getZhuyinListOnLevel().length,
        resetList,
        correct,
        incorrect,
        skipping,
        onCorrect: handleCorrect,
        onIncorrect: handleIncorrect,
        onSkip: handleSkip,
    }), [zhuyinList, zhuyinCharacter, correct, incorrect, skipping]);
    return (
        <ZhuyinContext.Provider value={contextValue}>
            {children}
        </ZhuyinContext.Provider>
    );
};

export default ZhuyinProvider;
