document.addEventListener("DOMContentLoaded", () => {
    // Sample data
    const rpcData = {
        avatarLeftUrl: "./assets/avatar.png",
        avatarRightUrl: "https://i.imgur.com/GfSzyMS.gif",
        username: "Skye ♡",
        status: "In Love with Wine <3",
        details: "",
        images: [
            "/assets/icon1.png", // First image
            "/assets/icon2.png"  // Second image
        ]
    };

    // Update the avatars and details
    document.getElementById("rpc-avatar-left").src = rpcData.avatarLeftUrl;
    document.getElementById("rpc-avatar-right").src = rpcData.avatarRightUrl;
    document.getElementById("rpc-username").textContent = rpcData.username;
    document.getElementById("rpc-status").textContent = rpcData.status;
    document.getElementById("rpc-details").textContent = rpcData.details;

    // Get the container and clear it to avoid duplication
    const imageContainer = document.getElementById("image-container");
    imageContainer.innerHTML = ""; // Clear existing items

    document.getElementById("rpc-username").style.textAlign = "left";

    // Add exactly 2 images
    rpcData.images.forEach((imageUrl) => {
        const img = document.createElement("img");
        img.src = imageUrl;
        img.alt = "Icon";
        img.style.width = "30px";
        img.style.height = "30px";
        img.style.margin = "0 5px";
        img.style.borderRadius = "5px";
        img.style.boxShadow = "0 0 5px rgba(255, 255, 255, 0.7)";
        imageContainer.appendChild(img);
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const muteButton = document.getElementById("mute-button");
    const audio = document.getElementById("background-audio");

    // Start with the audio muted
    audio.muted = true;

    muteButton.addEventListener("click", () => {
        if (audio.muted) {
            audio.muted = false;
            audio.play();
            muteButton.textContent = "🔊"; // Change icon to unmute
        } else {
            audio.muted = true;
            audio.pause();
            muteButton.textContent = "🔇"; // Change icon to mute
        }
    });
});
