import { Button } from "./components/Button";
import { defaultTheme}  from "./styles/themes/default";

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
export function App(){
  return(

    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
     <Button variant='terceiracolor'/>
     <Button variant='primeiracolor'/>
     <Button variant='sucess'/>
     <Button variant='segundacolor'/> 
    </ThemeProvider>
  )
}