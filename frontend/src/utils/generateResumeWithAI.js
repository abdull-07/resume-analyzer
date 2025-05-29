export const generateResumeWithAI = async (userData) => {
    try {
        const response = await fetch('/api/generate-resume', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData)
        });

        if (!response.ok) {
            throw new Error('Failed to generate resume');
        }

        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};