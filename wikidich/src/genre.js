function execute() {
    let response = fetch("https://wikisach.org/");

    if (response.ok) {
        let doc = response.html();
        const data = [];
        doc.select("div.tag-tabs .tag-tab a").forEach(e => {
            data.push({
                title: e.text(),
                input: 'https://wikisach.org' + e.attr('href'),
                script: 'gen.js'
            });
        });
        return Response.success(data);
    }

    return null;
}