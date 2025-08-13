import os
import google.generativeai as genai

# Get the API key from the environment
api_key = os.getenv("AIzaSyBQ7_k5_kTHWmpOo1HGRhnZC-SoxCitieo")
if not api_key:
    raise ValueError("GEMINI_API_KEY not found in environment variables.")

# Configure the Gemini client
genai.configure(api_key=api_key)

# Choose a model and send a prompt
model = genai.GenerativeModel("gemini-pro")
response = model.generate_content("Hello from GitHub Actions using Gemini API!")

# Print the response text
print("\nGemini says:\n")
print(response.text)
