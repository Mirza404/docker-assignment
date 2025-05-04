# Use official Python image
FROM python:3.12

# Set working directory in container
WORKDIR /app

# Copy dependency file first (for caching)
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy app code
COPY . .

# Expose port 5000
EXPOSE 5000

# Start the Flask app
CMD ["python", "app.py"]
