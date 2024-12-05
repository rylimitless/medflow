package main

import (
	"html/template"
	"net/http"
)

func main() {

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		tmpl, err := template.ParseFiles("templates/index.tmpl.html")
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)

			return
		}

		tmpl.Execute(w, nil)
		// w.Write([]byte("Hello, world!"))
	})

	http.ListenAndServe(":8080", nil)
}
