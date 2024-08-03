export default async function getUserPost(userId: string) {
    const res = await fetch (`http://localhost:3300/yearbook/api/userprof/${userId}`, {next: {revalidate:60}});

    if(!res.ok) throw new Error ('failed to fetch user');
    return res.json();
}

