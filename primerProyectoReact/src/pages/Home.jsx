import Header from "../components/Header";



export default function Home() {
    return (
        
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow p-4">
                <h1 className="text-3xl font-bold">Welcome to My Website</h1>
                <p className="mt-4">This is the home page content.</p>
            </main>
        </div>
    );
}