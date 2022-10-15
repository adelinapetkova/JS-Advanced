async function loadRepos() {
	let usrName = document.getElementById('username')
	let list = document.getElementById('repos');

	try {
		let response = await fetch(`https://api.github.com/users/${usrName.value}/repos`)

		if (response.ok == false) {
			throw new Error(`${response.status} ${response.statusText}`)
		}
		let data = await response.json()

		list.innerHTML = '';

		for (let repo of data) {
			list.innerHTML += `<li>
		<a href="${repo.html_url}" target="_blank">
			${repo.full_name}
		</a>
	</li>`;
		}

	} catch (err) {
		list.innerHTML=`${err.message}`
	}
}