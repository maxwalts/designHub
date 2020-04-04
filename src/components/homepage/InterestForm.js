import React from 'react'

const InterestForm = () => {
    return (
        <form>

        <div class="form-row">
            <div class="form-group col-md-3">
            <label for="inputFirstName">First Name</label>
            <input type="text" class="form-control" id="inputFirstName" />
            </div>

            <div class="form-group col-md-3">
            <label for="inputPassword4">Last Name</label>
            <input type="text" class="form-control" id="inputPassword4" />
            </div>
        </div>

        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="inputEmail">Email</label>
                <input type="email" class="form-control" id="inputEmail" placeholder="yourname@email.com" />
            </div>
        </div>

        <div class="form-row">
            <div class="form-group col-md-4">
            <label for="inputCity">Phone Number (optional)</label>
            <input type="number" class="form-control" id="inputCity" />
            </div>

            <div class="form-group col-md-2">
            <label for="inputState">Role</label>
            <select id="inputState" class="form-control">
                <option selected>Choose...</option>
                <option>UX Professional ("seller")</option>
                <option>Beta Tester ("buyer")</option>
            </select>
            </div>
        </div>

        <button type="submit" class="btn btn-primary">Sign me up!</button>
        </form>

    )
}

export default InterestForm