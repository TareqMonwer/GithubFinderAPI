class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  // Display profile UI
  showProfile(user) {
    this.profile.innerHTML = `
			<div class="card card-body mb-3">
				<div class="row">
					<div class="col-md-3">
						<img class="img-fluid mb-2" src="${user.avatar_url}">
						<a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block">
							View Profile
						</a>
					</div>
					<div class="col-md-9">
						<span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
						<span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
						<span class="badge badge-info">Follwers: ${user.followers}</span>
						<span class="badge badge-warning">Following: ${user.following}</span>
						<br><br>
						<ul class="list-group">
							<li class="list-group-item"><b>Company:</b> ${user.company}</li>
							<li class="list-group-item">
								<b>Website:</b> <a href="${user.blog}" targe="_blank">${user.blog}</a>
							</li>
							<li class="list-group-item"><b>Location:</b> ${user.location}</li>
							<li class="list-group-item"><b>Member Since:</b> ${user.created_at}</li>
						</ul>
					</div>
				</div>
			</div>
			<h3 class="page-heading">Latest Repos</h3>
			<div id="repos"></div>
		`;
  }

  // Show user repos.
  showRepos(repos) {
    let output = "";
    repos.forEach((repo) => {
      output += `
				<div class="card card-body mb-2">
					<div class="row">
						<div class="col-md-6">
							<a href="${repo.html_url}" target="_blank">${repo.name}</a>
						</div>
						<div class="col-md-6">
							<span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
							<span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
							<span class="badge badge-info">Forks: ${repos.forks_count}</span>
						</div>
					</div>
				</div>
			`;
    });
    // output repos.
    document.getElementById("repos").innerHTML = output;
  }

  // Throws alert when user not found.
  showAlert(msg, alertClassNames) {
    // Clear remaining alerts.
    this.clearAlert();
    // Create alert div.
    const div = document.createElement("div");
    // Add class names.
    div.className = alertClassNames;
    // Add text.
    div.appendChild(document.createTextNode(msg));
    // Get parent.
    const container = document.querySelector(".searchContainer");
    // Get searchbox.
    const search = document.querySelector(".search");
    // insert alert.
    container.insertBefore(div, search);

    // Timeout after 3s.
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  // Clear alert message.
  clearAlert() {
    const currentAlert = document.querySelector(".alert");

    if (currentAlert) {
      currentAlert.remove();
    }
  }

  // Clears the profile UI if nothing is typed in searchbar.
  clearProfile() {
    this.profile.innerHTML = "";
  }
}
