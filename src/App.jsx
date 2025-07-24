
import './App.css'
import { Box } from '@mui/material'
import Header from './components/Header'

function App() {


  return (
    <>
        <Header></Header>
        <Box component="main" sx={{minHeight: "450px"}}>main</Box>
        <Box component="footer">footer</Box>
    </>
  )
}

export default App
