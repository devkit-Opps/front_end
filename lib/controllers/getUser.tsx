export default async function getUser(userId: string) {
    const res = await fetch (`http://localhost:3300/yearbook/api/users/${userId}`, {next: {revalidate:60}});

    if(!res.ok) throw new Error ('failed to fetch user');
    return res.json();
}