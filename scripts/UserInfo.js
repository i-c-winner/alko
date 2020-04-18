export class UserInfo {
    constructor(newName, newJob, name, job, avatar) {
        this.name = name;
        this.job = job;
        this.newName = newName;
        this.newJob = newJob;
        this.avatar=avatar;
    }
    setUserInfo() {
        const infoUser = {
            name: this.newName.textContent, 
            job: this.newJob.textContent
        };
        return infoUser;
    }
    updateUserInfo(result) {
        this.newName.textContent = result.name;
        this.newJob.textContent = result.about;
        this.avatar.style.backgroundImage="URL("+result.avatar+")";
    }
}