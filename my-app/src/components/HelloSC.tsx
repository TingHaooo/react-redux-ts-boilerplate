import * as React from 'react';

interface Props {
    name: string,
    enthusiasmLevel?: number
}

const Hello = ({name, enthusiasmLevel = 1}: Props) => {
    if (enthusiasmLevel < 0) {
        throw new Error("You could be a little more enthusiastic. :D");
    }
    return (
        <div className="hello">
            <div className="greeting">
                Hello{name + getExclamanationMarks(enthusiasmLevel)}
            </div>
        </div>
    );
};

export default Hello;

function getExclamanationMarks(numChar: number) : string{
    return Array(numChar + 1).join("!");
}