// Plochkite.bg Premium Redesign Tile Calculator Logic

/**
 * Calculates the quantity of tiles and cost needed for a project
 * @param {number} area - The core area to cover in sq.m
 * @param {number} boxSize - Sq.m coverage provided by one box
 * @param {number} wastePercent - Waste factor percentage (e.g., 10 for 10%)
 * @param {number} pricePerSqM - Price in BGN per square meter
 * @returns {object} Calculated outputs
 */
function calculateTileRequirement(area, boxSize, wastePercent, pricePerSqM) {
    if (isNaN(area) || area <= 0) {
        return {
            totalSqM: 0,
            wasteSqM: 0,
            boxesNeeded: 0,
            actualCoverageSqM: 0,
            totalCost: 0
        };
    }

    const wasteMultiplier = 1 + (wastePercent / 100);
    const totalSqM = area * wasteMultiplier;
    const wasteSqM = totalSqM - area;
    
    // Boxes must be bought in whole units
    const boxesNeeded = Math.ceil(totalSqM / boxSize);
    const actualCoverageSqM = boxesNeeded * boxSize;
    const totalCost = actualCoverageSqM * pricePerSqM;

    return {
        totalSqM: parseFloat(totalSqM.toFixed(2)),
        wasteSqM: parseFloat(wasteSqM.toFixed(2)),
        boxesNeeded: boxesNeeded,
        actualCoverageSqM: parseFloat(actualCoverageSqM.toFixed(2)),
        totalCost: parseFloat(totalCost.toFixed(2))
    };
}

// Make globally available
window.calculateTileRequirement = calculateTileRequirement;
