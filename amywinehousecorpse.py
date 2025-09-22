from flask import Flask, render_template


app = Flask (
	__name__,
	template_folder="pages_html",
	static_folder="static"
)


@app.route("/")
def hello():
	return render_template("html.html")


# no page caching
@app.after_request
def add_header(response):
    response.headers['Cache-Control'] = 'no-store, no-cache, must-revalidate, max-age=0'
    response.headers['Pragma'] = 'no-cache'
    response.headers['Expires'] = '0'
    return response


if __name__ == "__main__":
	app.run(host="0.0.0.0", port=8080, debug=True)


##############################
# http://148.75.248.23:5000/ -#
##############################