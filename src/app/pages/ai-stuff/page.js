'use client'

import {useEffect, useState} from "react";
import Link from "next/link";
import {
    Alert,
    Box,
    Button,
    Divider,
    Paper,
    Tab,
    Tabs,
    TextField,
    Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";

export default function AiStuff() {
    const [tab, setTab] = useState(0);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const [registerForm, setRegisterForm] = useState({name: "", email: "", password: ""});
    const [loginForm, setLoginForm] = useState({email: "", password: ""});

    const fetchCurrentUser = async () => {
        try {
            const res = await fetch("/api/auth/me");
            if (res.ok) {
                const data = await res.json();
                setUser(data.user);
            } else {
                setUser(null);
            }
        } catch {
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCurrentUser();
    }, []);

    useEffect(() => {
        const urlError = new URLSearchParams(window.location.search).get("error");
        if (urlError === "login-required") {
            setError("You must log in to access the secured page.");
        } else if (urlError === "invalid-token") {
            setError("Your session expired. Please log in again.");
        }
    }, []);

    const handleRegister = async (event) => {
        event.preventDefault();
        setMessage("");
        setError("");

        try {
            const res = await fetch("/api/auth/register", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(registerForm),
            });
            const data = await res.json();

            if (!res.ok) {
                setError(data.error || "Registration failed");
                return;
            }

            setMessage("User created successfully. You can now log in.");
            setTab(1);
            setRegisterForm({name: "", email: "", password: ""});
        } catch {
            setError("Registration failed");
        }
    };

    const handleLogin = async (event) => {
        event.preventDefault();
        setMessage("");
        setError("");

        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(loginForm),
            });
            const data = await res.json();

            if (!res.ok) {
                setError(data.error || "Login failed");
                return;
            }

            setUser(data.user);
            setMessage(`Welcome back, ${data.user.name}!`);
            setLoginForm({email: "", password: ""});
        } catch {
            setError("Login failed");
        }
    };

    const handleLogout = async () => {
        setMessage("");
        setError("");

        try {
            await fetch("/api/auth/logout", {method: "POST"});
            setUser(null);
            setMessage("Logged out successfully.");
        } catch {
            setError("Logout failed");
        }
    };

    return (
        <Box sx={{maxWidth: 520, mx: "auto", p: 3}}>
            <Typography variant="h4" gutterBottom>
                AI-Stuff Auth
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{mb: 3}}>
                Manual JWT + httpOnly cookie authentication pattern.
            </Typography>

            {error && <Alert severity="error" sx={{mb: 2}}>{error}</Alert>}
            {message && <Alert severity="success" sx={{mb: 2}}>{message}</Alert>}

            {loading ? (
                <Typography>Checking session...</Typography>
            ) : user ? (
                <Paper sx={{p: 3}}>
                    <Typography variant="h6" gutterBottom>
                        Logged in as {user.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{mb: 2}}>
                        {user.email}
                    </Typography>
                    <Typography variant="body2" sx={{mb: 2}}>
                        JWT is stored in an httpOnly cookie named <strong>auth_token</strong>.
                        The browser sends it automatically on each request.
                    </Typography>
                    <Box sx={{display: "flex", gap: 2, flexWrap: "wrap"}}>
                        <Button
                            variant="contained"
                            component={Link}
                            href="/pages/ai-stuff/secured"
                            startIcon={<LockOutlinedIcon/>}
                        >
                            Go to Secured Page
                        </Button>
                        <Button variant="outlined" color="error" onClick={handleLogout}>
                            Logout
                        </Button>
                    </Box>
                </Paper>
            ) : (
                <Paper sx={{p: 2}}>
                    <Tabs value={tab} onChange={(_, value) => setTab(value)} sx={{mb: 2}}>
                        <Tab icon={<PersonAddOutlinedIcon/>} iconPosition="start" label="Register"/>
                        <Tab icon={<LockOutlinedIcon/>} iconPosition="start" label="Login"/>
                    </Tabs>

                    {tab === 0 && (
                        <Box component="form" onSubmit={handleRegister} sx={{display: "flex", flexDirection: "column", gap: 2}}>
                            <TextField
                                label="Name"
                                value={registerForm.name}
                                onChange={(e) => setRegisterForm({...registerForm, name: e.target.value})}
                                required
                                fullWidth
                            />
                            <TextField
                                label="Email"
                                type="email"
                                value={registerForm.email}
                                onChange={(e) => setRegisterForm({...registerForm, email: e.target.value})}
                                required
                                fullWidth
                            />
                            <TextField
                                label="Password"
                                type="password"
                                value={registerForm.password}
                                onChange={(e) => setRegisterForm({...registerForm, password: e.target.value})}
                                required
                                fullWidth
                                helperText="Minimum 6 characters"
                            />
                            <Button type="submit" variant="contained">
                                Create User
                            </Button>
                        </Box>
                    )}

                    {tab === 1 && (
                        <Box component="form" onSubmit={handleLogin} sx={{display: "flex", flexDirection: "column", gap: 2}}>
                            <TextField
                                label="Email"
                                type="email"
                                value={loginForm.email}
                                onChange={(e) => setLoginForm({...loginForm, email: e.target.value})}
                                required
                                fullWidth
                            />
                            <TextField
                                label="Password"
                                type="password"
                                value={loginForm.password}
                                onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                                required
                                fullWidth
                            />
                            <Button type="submit" variant="contained">
                                Login
                            </Button>
                        </Box>
                    )}
                </Paper>
            )}

            <Divider sx={{my: 4}}/>

            <Typography variant="h6" gutterBottom>
                Auth flow
            </Typography>
            <Typography variant="body2" component="div">
                <ol>
                    <li>Register creates a user in MongoDB (password hashed with bcrypt).</li>
                    <li>Login verifies credentials and signs a JWT with <code>jose</code>.</li>
                    <li>JWT is stored in an httpOnly cookie — not accessible from JavaScript.</li>
                    <li>Middleware protects <code>/pages/ai-stuff/secured</code> by verifying the cookie.</li>
                    <li><code>/api/auth/me</code> reads the cookie server-side and returns the current user.</li>
                </ol>
            </Typography>
        </Box>
    );
}
