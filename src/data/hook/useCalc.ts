import { useContext } from "react";

import CalculatorContext from "../CalculatorContext";

const useTask = () => useContext(CalculatorContext)

export default useTask