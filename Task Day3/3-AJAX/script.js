function start() {
    var xhr = new XMLHttpRequest();
    xhr.open("get", "https://jsonplaceholder.typicode.com/posts/1");
    xhr.send();
    xhr.addEventListener("readystatechange", function () {
        if (xhr.readyState === 4 && xhr.status == 200) {
            var post = JSON.parse(xhr.response);

            var card = document.createElement("div");
            card.className = "card bg-blue-100 w-96 shadow-lg hover:shadow-xl transition-shadow duration-300 m-4 ";

            card.innerHTML = `
                <div class="card-body">
                    <h2 class="card-title text-lg font-semibold">${post.title}</h2>
                    <p class="text-sm text-gray-600 leading-relaxed">${post.body}</p>
                    <div class="flex justify-between items-center text-xs text-gray-400 mt-2">
                        <span>By User ${post.userId}</span>
                    </div>
                </div>
            `;
            document.body.appendChild(card);
        }
    });
}

start();
