from flask import Flask, render_template, request, redirect, url_for, flash
import mysql.connector

app = Flask(__name__)
app.secret_key = 'your_secret_key'  # Set your secret key for session management

# Function to establish a database connection
def get_db_connection():
    return mysql.connector.connect(
        host="localhost",
        port='3307',  # Make sure to use the correct port
        user="root",
        password="Yash4247@",
        database="FOODFUZZ"
    )

@app.route("/view_tables")
def view_tables():
    try:
        connection = get_db_connection()
        cursor = connection.cursor()

        # Get a list of all tables in the database
        cursor.execute("SHOW TABLES")
        tables = cursor.fetchall()

        # Print table names
        print("Table Names:")
        for table in tables:
            print(table[0])

            # Fetch the first five rows of each table
            cursor.execute(f"SELECT * FROM {table[0]} LIMIT 5")
            rows = cursor.fetchall()

            # Print the first five rows
            print(f"First five rows of table {table[0]}:")
            for row in rows:
                print(row)

        cursor.close()
        connection.close()

        return "Check console for table names and first five rows of each table"
    except mysql.connector.Error as err:
        print("MySQL Error: ", err)  # Log the error to the console for debugging
        flash("An error occurred while retrieving table data.", "danger")
        return redirect(url_for("login"))

if __name__ == "__main__":
    app.run(debug=True)
