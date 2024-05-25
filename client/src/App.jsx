import { Box, Heading } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";
import Table from "./components/Table";
import Navbar from "./routes/NavBar";

function App() {
  /* Fetch data from server */
  const [data, setPlayerData] = useState([]);
  const fetchAPI = async () => {
    const response = await axios.get("http://127.0.0.1:8080/api/users");
    setPlayerData(response.data);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <>
      <Heading as="h4" size="md">
        <Navbar />
      </Heading>
      <Box maxW={1000} mx="auto" px={6} pt={24} fontSize="sm">
        <Heading mb={10}>Big Board</Heading>
        <Table data={data} />
      </Box>
    </>
  );
}

export default App;
