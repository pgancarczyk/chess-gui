export interface Config {
    pieces: {
        graphicType: string;
        size: number;
        textSymbols?: {
            black: {
                'r': string;
                'n': string;
                'b': string;
                'q': string;
                'k': string;
                'p': string;
            },
            white: {
                'r': string;
                'n': string;
                'b': string;
                'q': string;
                'k': string;
                'p': string;
            }
        }
        imagePaths?: {
            black: {
                'r': string;
                'n': string;
                'b': string;
                'q': string;
                'k': string;
                'p': string;
            },
            white: {
                'r': string;
                'n': string;
                'b': string;
                'q': string;
                'k': string;
                'p': string;
            }
        }
        colors?: {
            black: string;
            white: string;
        }
        placement: string;
        drag: {
            animation: {
                interpolation: string;
                speed: number;
            }
            effect: {
                sizeChange: number;
                snap: boolean;
            }
        }
    };
    board: {
        cells: {
            graphicType: string;
            imagePaths?: {
                hover: {
                    black: string;
                    white: string;
                };
                unhovered: {
                    black: string;
                    white: string;
                }
            }
            colors: {
                hover: {
                    black: string;
                    white: string;
                };
                unhovered: {
                    black: string;
                    white: string;
                }
            }
        };
        notation: {
            font: string;
            size: number;
            placement: string;
            repeat: boolean;
        };
        border: {
            graphicType: string;
            color: string;
            size: number;
            image?: string;
        };
    }
    comment?: string;
}