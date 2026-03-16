let powerUp = "mushroom";
let hieuUng = "";

if (powerUp === "mushroom") {
  hieuUng = "Mario becomes Super!";
} else if (powerUp === "flower") {
  hieuUng = "Mario can shoot fireballs!";
} else if (powerUp === "star") {
  hieuUng = "Mario is invincible!";
} else if (powerUp === "none") {
  hieuUng = "Mario is normal";
} else {
  hieuUng = "Unknown power-up";
}

// In ra ngoài console hiệu ứng tên hiệu ứng
console.log(hieuUng);
