import React from "react";

export const Copyright = () => {
    const year = new Date().getFullYear();

    return (
        <div className="text-center">
            <p>
                © {year} Ancene by <a href="#">ancene.org</a>. All rights
                reserved.
            </p>
        </div>
    );
};
