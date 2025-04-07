import Header from "../components/Header";


export default function NoPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow p-4">
                <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
                <p className="mt-4">The page you are looking for does not exist.</p>
            </main>
        </div>
    );
}