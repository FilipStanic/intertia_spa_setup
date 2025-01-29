import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Products({ auth, products }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Products</h2>}
        >
            <Head title="Products" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="overflow-hidden shadow-xl sm:rounded-lg">
                        <div className="flex flex-col">
                            <div className="flex bg-gray-100 p-2">
                                <div className="flex-1 font-semibold">Name</div>
                                <div className="flex-1 font-semibold">Description</div>
                                <div className="flex-1 font-semibold">Price</div>
                            </div>
                            {products.map((product) => (
                                <div key={product.id} className="flex p-2 border-t">
                                    <div className="flex-1">{product.name}</div>
                                    <div className="flex-1">{product.description}</div>
                                    <div className="flex-1">${product.price}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
