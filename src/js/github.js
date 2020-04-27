class Github {
  constructor() {
    this.client_id = "382cb00458d936cd00db";
    this.client_secret = "0b3d7a4c5d0595a05b0e7c2f602cd0e8216b5333";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  async getUser(user) {
    const profileRes = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const repoRes = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&
			sort=${this.repos_sort}&client_id=${this.client_id}&
			client_secret=${this.client_secret}`
    );

    const profile = await profileRes.json();
    const repos = await repoRes.json();

    return {
      profile,
      repos,
    };
  }
}
