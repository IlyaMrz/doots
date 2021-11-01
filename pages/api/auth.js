// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    console.log("auth hit");
    res.status(200).json({ user: "userZero" });
}
