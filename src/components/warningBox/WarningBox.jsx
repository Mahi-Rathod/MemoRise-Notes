import React, { useState } from "react";

const WarningBox = (
    {
        handleOk,
        handleCancel,
        mainText,
        warningMessage
    }
) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-80">
                <h2 className="text-lg font-bold text-cyan-700">Warning</h2>
                <p className="mt-4 text-gray-700">{warningMessage}</p>
                <div className="flex justify-end gap-4 mt-6">
                    <button
                        onClick={handleCancel}
                        className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleOk}
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                        {mainText}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WarningBox;
