async function loadCommits() {
    let usrName = document.getElementById('username')
    let repo = document.getElementById('repo')
    let list = document.getElementById('commits')

	try {
		let response = await fetch(`https://api.github.com/repos/${usrName.value}/${repo.value}/commits`)

		if (response.ok == false) {
			throw new Error(`${response.status} ${response.statusText}`)
		}
		let data = await response.json()

		list.innerHTML = '';

		for (let { commit } of data) {
			list.innerHTML += `<li>${commit.author.name}: ${commit.message}</li>`;
		}

	} catch (err) {
		list.innerHTML=`Error: ${err.status} (Not Found)`
	}
}