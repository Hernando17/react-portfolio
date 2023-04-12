import { Routes, Route } from 'react-router-dom';
import { Landing, About } from '../pages';

export default function Routers() {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
        </Routes>
    )
}