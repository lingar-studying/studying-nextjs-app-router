'use client'

import {useEffect, useState} from "react";
import Link from "next/link";
import {
    Alert,
    Box,
    Button,
    Paper,
    Typography,
} from "@mui/material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import LockIcon from "@mui/icons-material/Lock";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const icons = [AutoAwesomeIcon, PsychologyIcon, SmartToyIcon];

export default function AiStuffSecured() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const loadUser = async () => {
            try {
                const res = await fetch("/api/auth/me");
                const data = await res.json();

                if (!res.ok || !data.user) {
                    setError("Could not verify your session.");
                    return;
                }

                setUser(data.user);
            } catch {
                setError("Could not verify your session.");
            } finally {
                setLoading(false);
            }
        };

        loadUser();
    }, []);

    if (loading) {
        return <Typography sx={{p: 3}}>Loading secured content...</Typography>;
    }

    if (error || !user) {
        return (
            <Box sx={{p: 3}}>
                <Alert severity="error" sx={{mb: 2}}>{error}</Alert>
                <Button component={Link} href="/pages/ai-stuff" startIcon={<ArrowBackIcon/>}>
                    Back to Login
                </Button>
            </Box>
        );
    }

    return (
        <Box sx={{p: 3, maxWidth: 720, mx: "auto"}}>
            <Paper sx={{p: 3, border: "2px solid", borderColor: "success.main"}}>
                <Box sx={{display: "flex", alignItems: "center", gap: 1, mb: 2}}>
                    <LockIcon color="success"/>
                    <Typography variant="h4">
                        Secured Page
                    </Typography>
                </Box>

                <Typography variant="h6" gutterBottom>
                    Welcome, {user.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{mb: 3}}>
                    {user.email} — you reached this page because middleware verified your JWT cookie.
                </Typography>

                <Box sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: 3,
                    mb: 3,
                }}>
                    {icons.map((Icon, i) => (
                        <Box
                            key={i}
                            sx={{
                                height: 120,
                                border: "1px solid",
                                borderColor: "divider",
                                borderRadius: 2,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                bgcolor: "action.hover",
                            }}
                        >
                            <Icon sx={{fontSize: "4rem", color: "primary.main"}}/>
                        </Box>
                    ))}
                </Box>

                <Typography variant="body2" sx={{mb: 2}}>
                    This content is only visible to authenticated users. The JWT never leaves the
                    httpOnly cookie — the server reads it on every protected request.
                </Typography>

                <Button component={Link} href="/pages/ai-stuff" variant="outlined" startIcon={<ArrowBackIcon/>}>
                    Back to AI-Stuff
                </Button>
            </Paper>
        </Box>
    );
}
