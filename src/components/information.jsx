import Button from "./button";

function Information() {
    return (
        <div className="information">
            <h1 className="heading-pink">
                WE'RE <span className="heading-brown">COMING SOON</span>
            </h1>
            <p className="text">
                Hello fellow shoppers! We're currently building our new fashion
                store. Add your email below to stay up-to-date with
                announcements and our launch deals.
            </p>
            <Button />
        </div>
    );
}

export default Information;
