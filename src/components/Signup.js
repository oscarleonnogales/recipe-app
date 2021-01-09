import React, { useRef, useState } from 'react';
import { Card, Form, Button, Container, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider, useAuth } from '../contexts/AuthContext';

export default function Signup() {
	const emailRef = useRef();
	const passwordRef = useRef();
	const confirmPasswordRef = useRef('');

	const { signup, currentUser } = useAuth();
	const [error, setError] = useState();
	const [loading, setLoading] = useState(false);

	async function handleSubmit(e) {
		e.preventDefault();
		if (passwordRef.current.value !== confirmPasswordRef.current.value) {
			return setError('Passwords do not match');
		}
		try {
			setError(' ');
			setLoading(true);
			await signup(emailRef.current.value, passwordRef.current.value);
		} catch {
			setError('Failed to create an account');
		}
		setLoading(false);
	}

	return (
		<AuthProvider>
			<Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
				<div className="w-100" style={{ maxWidth: '600px' }}>
					<Card>
						<Card.Body>
							<h2 className="text-center mb-4">Sign Up</h2>
							{currentUser && currentUser.email}
							{error && <Alert variant="danger">{error}</Alert>}
							<Form onSubmit={handleSubmit}>
								<Form.Group id="email">
									<Form.Label>Email</Form.Label>
									<Form.Control type="email" requiered ref={emailRef} />
								</Form.Group>
								<Form.Group id="password">
									<Form.Label>Password</Form.Label>
									<Form.Control type="password" requiered ref={passwordRef} />
								</Form.Group>
								<Form.Group id="confirm-password">
									<Form.Label>Confirm Password</Form.Label>
									<Form.Control type="password" requiered ref={confirmPasswordRef} />
								</Form.Group>
								<Button disabled={loading} className="w-100" type="submit">
									Sign Up
								</Button>
							</Form>
						</Card.Body>
					</Card>
					<div className="w-100 text-center mt-2">Already have an account? Log In</div>
				</div>
			</Container>
		</AuthProvider>
	);
}
