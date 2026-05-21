from flask import Flask, request, jsonify
import smtplib
from email.mime.text import MIMEText
import os

app = Flask(__name__)

@app.route('/api/book', methods=['POST'])
def book_toy():
    data = request.json
    toy_name = data.get('toy_name')
    client_email = data.get('email')
    
    # 1. Email to Admin
    send_email("admin@yourdomain.com", f"New Booking: {toy_name}", f"Details: {data}")
    
    # 2. Email to Client
    send_email(client_email, "Booking Confirmed", "We will get back to you shortly.")
    
    return jsonify({"status": "success", "message": "Emails sent"})

def send_email(to, subject, body):
    msg = MIMEText(body)
    msg['Subject'] = subject
    msg['From'] = os.environ.get("MAIL_USER")
    msg['To'] = to
    
    with smtplib.SMTP_SSL('smtp.gmail.com', 465) as server:
        server.login(os.environ.get("MAIL_USER"), os.environ.get("MAIL_PASS"))
        server.send_message(msg)
