(function () {
    function wait(ms) {
        var deferred = $.Deferred();
        setTimeout(deferred.resolve, ms);

        return deferred.promise();
    };

    var newFeatureArrow = $('.arrow.big.left');
    var hotfixNewBranchArrow = $('.branchHotfix');
    var bugNewBranchArrow = $('.branchBug');
    var featureBranch = $('.feature');
    var devBranch = $('.development');
    var bugBranch = $('.bug');
    var qaBranch = $('.qa');
    var hotfixBranch = $('.hotfix');
    var prodBranch = $('.production');
    var mergeBug = $('.mergeBug');
    var pullBug = $('.pullBug');
    var mergeFeature = $('.mergeFeature');
    var mergeQAToFeature = $('.mergeQAFeature');
    var pullFeature = $('.pullFeature');
    var mergeHotfixToQA = $('.mergeHotfixQA');
    var mergeHotfixToProd = $('.mergeHotfixProd');
    var mergeAndTag = $('.mergeTagProd');
    var staticBranches = [devBranch, qaBranch, prodBranch];

    var walkthrough = {
        cycle: function (timer, elements) {
            var timeIncrement = timer;
            var l = elements.length;
            var current = 0;
            (function callback () {
                var thisEl = elements[current];
                wait(timeIncrement).then(function () {
                    thisEl.show();
                });
                timeIncrement += timer;
                current++;
                if (current < l) {
                    callback();
                }
            })();
        },
        feature: function () {
            this.cycle(0, staticBranches);
            this.cycle(5000, [newFeatureArrow, featureBranch, mergeQAToFeature, mergeFeature, pullFeature, mergeAndTag])
        },
        bug: function () {

        },
        hotfix: function () {

        }
    };

    walkthrough.feature();

//    wait(5000).then(function () {
//        alert('fired');
//    });
})();
