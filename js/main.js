class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = '
            < header >
            <div id="navlist">
                <a href="index.html"> <img src="Res/toplogo.png" alt="Logo" style="width:150px;height: 40px;" /></a>
                <a href="index.html">Home</a>
                <a href="#">Our Products</a>
                <a href="#">Images</a>
                <a href="contact.html">Contact</a>
                <a href="about.html">About</a>


                <div id="searchfield">
                    <input type="text" placeholder="Search Courses" name="search" />
                </div>
                <div class="searchbutton">
                    <button>
                        <b>Search</b>
                    </button>
                </div>



                <div id="login">
                    <button>
                        <b>Login</b>
                    </button>
                </div>
                <div id="signup">
                    <button>
                        <b>Signup</b>
                    </button>
                </div>

            </div>
</div >
            <div id="Top"></div>
</header > '
    }
}

customElements.define('my-header,MyHeader)