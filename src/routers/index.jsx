import { Routes, Route } from 'react-router-dom';
import { Landing } from '../pages';

export default function Routers() {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />
        </Routes>
    )
}