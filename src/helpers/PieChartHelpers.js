const getGenderDistribution = (data) => {
    const total = data.length;
    const genderCount = data.reduce(
        (acc, { gender }) => {
            if (gender.toLowerCase() === "male") acc.male += 1;
            if (gender.toLowerCase() === "female") acc.female += 1;
            return acc;
        },
        { male: 0, female: 0 }
    );

    return {
        maleCount: genderCount.male,
        malePer: ((genderCount.male / total) * 100).toFixed(1),
        femaleCount: genderCount.female,
        femalePer: ((genderCount.female / total) * 100).toFixed(1),
    };
};

const getActiveGenderDistribution = (data) => {
    const total = data.length;
    const genderCount = data.reduce(
        (acc, { gender, status }) => {
            if (gender.toLowerCase() === "male" && status === "active")
                acc.male += 1;
            if (gender.toLowerCase() === "female" && status === "active")
                acc.female += 1;
            return acc;
        },
        { male: 0, female: 0 }
    );

    return {
        maleCount: genderCount.male,
        malePer: ((genderCount.male / total) * 100).toFixed(1),
        femaleCount: genderCount.female,
        femalePer: ((genderCount.female / total) * 100).toFixed(1),
    };
};

export default {
    getGenderDistribution,
    getActiveGenderDistribution,
};
