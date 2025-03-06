import { useState } from "react";
import styled from "styled-components";


const CalculatorProgram = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 0 auto;
    width: 85%;
    background-color: #D9B382;
    border: solid 0.5vw #B8860B;
`;

const CalculatorHeading = styled.h3`
    font: bold 2vw "Courier New", monospace;
    color: maroon;
    font-size: calc(2px + 2.5vw);
    margin: 1vw 0;
`;

const InputSection = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 50%;
`;

const InputLabel = styled.label`
    font: bold 2vw "Courier New", monospace;
`;

const StyledInput = styled.input`
    font: bold 2vw "Courier New", monospace;
    text-align: center;
    background-color: #dcdcdc;
    padding: 0.5vw 1vw;
`;

const ButtonSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 2vw 0;
`;

const StyledButton = styled.button`
    font: bold calc(2px + 1.5vw) "Courier New", monospace;
    background-color: cornsilk;
    height: 7vw;
    width: 7vw;
    border: solid 0.25vw #B8860B;
    border-radius: 50%;
`;

const Output = styled.p`
    font: bold calc(2px + 2vw) "Courier New", monospace;
    justify-content: center;
    text-align: center;
    margin: 1vw auto;
    width: 70%;
    height: 4vw;
    background-color: #dcdcdc;
    border: solid 0.25vw #333333;
`;

export default function Calculator() {

    const [firstNum, setFirstNum] = useState("");
    const [secondNum, setSecondNum] = useState("");
    const [output, setOutput] = useState("");
    const [color, setColor] = useState(true);

    function CalculateAnswer(operation: string) {
        const num1 = Number(firstNum);
        const num2 = Number(secondNum);
        console.log(num1 + num2);

        if (isNaN(num1) || isNaN(num2) || firstNum === "" || secondNum === "") {
            console.log(num1 + num2);
            setOutput("Invalid Input(s)");
            return;
        } else {
            let result;
            if (operation === "+") {
                result = num1 + num2;
            } else if (operation === "-") {
                result = num1 - num2;
            } else if (operation === "*") {
                result = num1 * num2;
            } else if (operation === "/") {
                result = num1 / num2;
            } else if (operation === "**") {
                result = 1;
                for (let i= 0; i < num2; i++) {
                    result = result * num1;
                }
            } else {
                setFirstNum("")
                setSecondNum("");
                setOutput("");
                return;
            }

            if (result < 0) {
                setColor(false);
            } else {
                setColor(true);
            }

            setOutput(String(result));
        }

    }

    return (
        <>
            <CalculatorProgram>
                <CalculatorHeading>Javascript Calculator</CalculatorHeading>
                <InputSection>
                    <InputLabel htmlFor="first-number">First Number:</InputLabel><StyledInput type="text" id="first-number" value={firstNum} onChange={(e) => setFirstNum(e.target.value)} />
                    <InputLabel htmlFor="second-number">Second Number:</InputLabel><StyledInput type="text" id="second-number" value={secondNum} onChange={(e) => setSecondNum(e.target.value)} />
                </InputSection>
                <ButtonSection>
                    <StyledButton onClick={() => CalculateAnswer("+")}>+</StyledButton>
                    <StyledButton onClick={() => CalculateAnswer("-")}>-</StyledButton>
                    <StyledButton onClick={() => CalculateAnswer("*")}>*</StyledButton>
                    <StyledButton onClick={() => CalculateAnswer("/")}>/</StyledButton>
                    <StyledButton onClick={() => CalculateAnswer("**")}>**</StyledButton>
                    <StyledButton onClick={() => CalculateAnswer("Clear")}>Clear</StyledButton>
                </ButtonSection>
                <Output style={{ color: color ? "black" : "red" }}>{output}</Output>
            </CalculatorProgram>
        </>
    );
}