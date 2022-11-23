import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

// import pages
import Home from "./pages/Home"
import GoldMint from "./pages/GoldMint"
import SilverMint from "./pages/SilverMint"
import BronzeMint from "./pages/BronzeMint"
import MblGoldMint from "./pages/MblGoldMint"
import MblSilverMint from "./pages/MblSilverMint"
import MblBronzeMint from "./pages/MblBronzeMint"

const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...` : input;

export const StyledLink = styled.a`
  color: var(--secondary);
  text-decoration: none;
`;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/GoldMint" element={<GoldMint />} />
        <Route path="/SilverMint" element={<SilverMint />} />
        <Route path="/BronzeMint" element={<BronzeMint />} />
        <Route path="/MblGoldMint" element={<MblGoldMint />} />
        <Route path="/MblSilverMint" element={<MblSilverMint />} />
        <Route path="/MblBronzeMint" element={<MblBronzeMint />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
