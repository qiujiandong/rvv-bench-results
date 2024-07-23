let spacemit_k1 = {
    run_results: [
        {
            title: "poly1305 aligned",
            labels: ["0", "boring", "rvv",],
            data: [
                [1, 4, 7, 10, 13, 16, 19, 23, 27, 31, 35, 40, 45, 50, 55, 61, 67, 73, 80, 87, 95, 103, 112, 121, 131, 141, 152, 163, 175, 188, 202, 216, 231, 247, 264, 282, 301, 321, 342, 365, 389, 414, 441, 469, 499, 531, 565, 601, 639, 679, 721, 766, 814, 864, 917, 973, 1033, 1096, 1163, 1234, 1309, 1389, 1473, 1562, 1656, 1756, 1862, 1974, 2093, 2219, 2352, 2493, 2642, 2800, 2967, 3144, 3331, 3529, 3739, 3961, 4197, 4446, 4710, 4990, 5286, 5599, 5931, 6282, 6654, 7048, 7465, 7907, 8375, 8870, 9394, 9949, 10537, 11159, 11818, 12516, 13255, 14037, 14865, 15742, 16671, 17654, 18695, 19797, 20964, 22200, 23508, 24893, 26360, 27913, 29557, 31298, 33142, 35094, 37161, 39349, 41666, 44119, 46717, 49468, 52380, 55464, 58729, 62186, 65847, 69723, 73827, 78172, 82773, 87645, 92803, 98265, 104048, 110171, 116654, 123519, 130787, 138483, 146632, 155260, 164395, 174068, 184310, 195154, 206636, 218794, 231667, 245297, 259729, 275010, 291190, 308321, 326460, 345666, 366002, 387534, 410333, 434473, 460033, 487096, 515751, 546092, 578218, 612233, 648249, 686384, 726762, 769515, 814783, 862714, 913464, 967200, 1024097, 1084341, 1148128, 1215667, 1287179, 1362898, 1443071, 1527960, 1617843, 1713013, 1813781, 1920477, 2033449, 2153066, 2279719, 2413823, 2555815, 2706160, 2865348, 3033900, 3212367, 3401332, 3601413, 3813263, 4037575, 4275082, 4526560, 4792831, 5074765, 5373283, 5689361, 6024032, 6378389, 6753591, 7150864, 7571506, 8016891, 8488475, 8987800, 9516497, 10076293, 10669019, 11296611, 11961120, 12664718, 13409704, 14198513, 15033722, 15918061,],
                [0.0009069, 0.0036269, 0.0062898, 0.0089565, 0.0117625, 0.0144783, 0.0139587, 0.0168881, 0.0198303, 0.0227882, 0.0216222, 0.0247375, 0.0278250, 0.0266937, 0.0293509, 0.0325315, 0.0314288, 0.0342646, 0.0375322, 0.0364527, 0.0397922, 0.0389671, 0.0423877, 0.0417345, 0.0415187, 0.0447171, 0.0445639, 0.0444583, 0.0477102, 0.0479215, 0.0483372, 0.0487081, 0.0492316, 0.0498224, 0.0506411, 0.0515529, 0.0526499, 0.0515314, 0.0527435, 0.0540604, 0.0536414, 0.0551320, 0.0549767, 0.0549505, 0.0551625, 0.0555401, 0.0560870, 0.0567276, 0.0575849, 0.0572379, 0.0570731, 0.0582772, 0.0584680, 0.0588109, 0.0583440, 0.0590202, 0.0590271, 0.0591649, 0.0594957, 0.0592380, 0.0598889, 0.0599974, 0.0596708, 0.0601847, 0.0602416, 0.0604980, 0.0604186, 0.0605287, 0.0608165, 0.0608411, 0.0610624, 0.0610753, 0.0609059, 0.0612934, 0.0611698, 0.0612603, 0.0612438, 0.0614090, 0.0615021, 0.0615147, 0.0615017, 0.0616433, 0.0616063, 0.0617364, 0.0616884, 0.0618246, 0.0617985, 0.0618628, 0.0618327, 0.0618560, 0.0618711, 0.0618490, 0.0618902, 0.0618052, 0.0618316, 0.0619371, 0.0619423, 0.0619062, 0.0619930, 0.0619459, 0.0620706, 0.0621173, 0.0619086, 0.0621268, 0.0621865, 0.0621780, 0.0621517, 0.0622062, 0.0621839, 0.0621958, 0.0618170, 0.0622129, 0.0621392, 0.0622155, 0.0621335, 0.0618072, 0.0618100, 0.0616233, 0.0615238, 0.0614677, 0.0615645, 0.0616173, 0.0616156, 0.0615705, 0.0616069, 0.0616144, 0.0615930, 0.0616211, 0.0616053, 0.0615317, 0.0616563, 0.0616771, 0.0616016, 0.0615907, 0.0615170, 0.0615763, 0.0614478, 0.0615450, 0.0614485, 0.0614150, 0.0614146, 0.0614241, 0.0614839, 0.0614201, 0.0614819, 0.0613863, 0.0613830, 0.0614047, 0.0613974, 0.0614368, 0.0614301, 0.0614012, 0.0614192, 0.0613971, 0.0614316, 0.0613932, 0.0614315, 0.0614627, 0.0614708, 0.0615103, 0.0615273, 0.0615489, 0.0615342, 0.0615435, 0.0615702, 0.0615480, 0.0615224, 0.0614039, 0.0615619, 0.0615500, 0.0615626, 0.0615804, 0.0615935, 0.0615922, 0.0615948, 0.0615939, 0.0615980, 0.0615811, 0.0615946, 0.0616063, 0.0616085, 0.0615713, 0.0615854, 0.0615982, 0.0616006, 0.0616123, 0.0616036, 0.0616054, 0.0616099, 0.0616093, 0.0616129, 0.0616056, 0.0616068, 0.0616135, 0.0616180, 0.0616049, 0.0615691, 0.0616059, 0.0615732, 0.0616105, 0.0615584, 0.0615381, 0.0615737, 0.0616181, 0.0616107, 0.0616071, 0.0616182, 0.0616148, 0.0616235, 0.0616356, 0.0616353, 0.0616474, 0.0616284, 0.0616437, 0.0616455, 0.0616473, 0.0616545, 0.0616578, 0.0616630, 0.0616653, 0.0616251, 0.0616714, 0.0616775, 0.0616768, 0.0616825,],
                [0.0007042, 0.0028143, 0.0049256, 0.0070322, 0.0091518, 0.0112576, 0.0133678, 0.0161769, 0.0189910, 0.0218110, 0.0246210, 0.0281496, 0.0316578, 0.0351704, 0.0386779, 0.0429078, 0.0471490, 0.0513722, 0.0562775, 0.0611997, 0.0668120, 0.0724039, 0.0788302, 0.0851468, 0.0781436, 0.0841615, 0.0906191, 0.0972263, 0.1044324, 0.1121450, 0.1206042, 0.1289436, 0.1378302, 0.1474406, 0.1364728, 0.1459004, 0.1557749, 0.1661146, 0.1770186, 0.1888598, 0.1775992, 0.1890346, 0.2013284, 0.2141674, 0.2279137, 0.2170048, 0.2308690, 0.2456394, 0.2611947, 0.2510908, 0.2666642, 0.2834569, 0.2748514, 0.2918327, 0.2849883, 0.3024298, 0.2974074, 0.3154751, 0.3115227, 0.3307557, 0.3281359, 0.3483363, 0.3469780, 0.3469915, 0.3677670, 0.3690277, 0.3711880, 0.3742978, 0.3784125, 0.3833661, 0.3890770, 0.3955604, 0.4028636, 0.4108915, 0.4049019, 0.4144831, 0.4111673, 0.4222706, 0.4214287, 0.4339252, 0.4352165, 0.4377158, 0.4414328, 0.4461701, 0.4421248, 0.4491407, 0.4479032, 0.4483156, 0.4580846, 0.4529119, 0.4572685, 0.4625247, 0.4620798, 0.4631617, 0.4654873, 0.4691137, 0.4684485, 0.4692973, 0.4714941, 0.4750175, 0.4752808, 0.4769404, 0.4759545, 0.4803388, 0.4785511, 0.4818856, 0.4799980, 0.4827700, 0.4839148, 0.4837230, 0.4850150, 0.4825375, 0.4803883, 0.4789924, 0.4851950, 0.4839989, 0.4835678, 0.4720852, 0.4641614, 0.4563368, 0.4595639, 0.4681536, 0.4737111, 0.4754905, 0.4703992, 0.4763744, 0.4768136, 0.4771441, 0.4790114, 0.4730800, 0.4794542, 0.4748879, 0.4758262, 0.4761939, 0.4833932, 0.4767871, 0.4857605, 0.4781533, 0.4855858, 0.4876791, 0.4863155, 0.4819542, 0.4851347, 0.4867991, 0.4871398, 0.4880720, 0.4856769, 0.4805295, 0.4834106, 0.4867220, 0.4847344, 0.4845831, 0.4799459, 0.4830651, 0.4874129, 0.4829744, 0.4859424, 0.4880126, 0.4884228, 0.4854400, 0.4799818, 0.4882325, 0.4896263, 0.4863628, 0.4883949, 0.4884865, 0.4899841, 0.4850256, 0.4880544, 0.4902819, 0.4904084, 0.4902776, 0.4914325, 0.4913784, 0.4910585, 0.4839948, 0.4918614, 0.4928828, 0.4845889, 0.4905876, 0.4924972, 0.4854091, 0.4926759, 0.4850594, 0.4926454, 0.4927126, 0.4854312, 0.4856000, 0.4926810, 0.4921722, 0.4923672, 0.4922636, 0.4922314, 0.4924167, 0.4927878, 0.4930052, 0.4931870, 0.4933856, 0.4937786, 0.4938403, 0.4937520, 0.4935638, 0.4861992, 0.4933265, 0.4933630, 0.4930028, 0.4859837, 0.4861816, 0.4863609, 0.4937539, 0.4937779, 0.4936698, 0.4935539, 0.4856285, 0.4863295, 0.4864272, 0.4938423, 0.4864869, 0.4936117, 0.4860337, 0.4937845, 0.4938989, 0.4938235, 0.4936817, 0.4937278,],
            ]
        },
    ]
}