// tslint:disable:max-line-length
const en = {
  app: {
    mainTitle: 'Sparta',
    connectingWarning: 'You need connect to wallet',
    pages: {
      overview: {
        poolBalanceTitle: 'Pool Deposit/Withdrawal Price Curve',
        distributions: 'Distributions',
        poolInfoTitle: 'Pool information',
      },
      account: {
        tabs: {
          summary: 'My Summary',
          stakes: 'My Stakes',
          borrows: 'My Borrows',
        },
      },
      history: {
        tabs: {
          transaction: 'Transaction History',
          profit: 'LPs Profit',
          liquidations: 'Liquidations',
        },
      },
      strategies: {
        liquidityProvisionTitle: 'Liquidity provision',
        liquidityProvisionHint: 'Liquidity provision',
        lendingTitle: 'Lending',
        borrowingTitle: 'Borrowing',
        liquidityAdvantages: 'Passive Interest, Lower Risks',
        lendingAdvantages: 'High Interest, High Risk',
        borrowingAdvantages: 'Only 50% Collateral',
        liquidityButton: 'Become Liquidity Provider',
        lendingButton: 'Lend',
        noteAboutLending:
          'In order to start lending, you first need to make a deposit & become a Sparta member.',
        borrowingButton: 'Borrow',
        noteAboutBorrowing:
          'In order to take out a loan, you need to make a deposit first, covering 50% collateral for the loan you want to request.',
      },
    },
    components: {
      header: {
        apr: 'Pool APR',
        availableBalance: 'Supply',
        depositPlusWithdraw24Volume: '24 volume',
        distributed: 'Total distributed (Coming soon)',
        issued: 'Loans',
        members: 'Members',
        shares: 'Shares',
        total: 'Total',
        yield: 'Yield (Coming soon)',
      },
    },
  },
  modules: {
    navigation: {
      products: 'Product',
      company: 'Company',
      tutorials: 'Tutorials',
      wiki: 'Wiki',
      app: 'App',
      roadmap: 'Roadmap',
      whitepaper: 'Whitepaper',
      events: 'Events',
      blog: 'Blog',
      quest: 'Quest',
      cashflowRelay: 'Cashflow Relay',
      chamaNetwork: 'Akropolis Network',
      privacyPolicy: 'Privacy Policy',
      termsConditions: 'Terms & Conditions',
      pointSystem: 'Point System',
      statistics: 'Statistics',
      governance: 'Governance',
      account: 'Account',
      lend: 'Lend',
      borrow: 'Borrow',
      liquidations: 'Liquidations',
      history: 'History',
      copyright: 'Sparta v1.0 by Akropolis Decentralised Ltd',
    },
  },
  features: {
    auth: {
      applicationNetwork: 'This application works with the network "%{networkName}"',
      modalTitle: {
        connected: 'Disconnect or change wallet',
        disconnected: 'Connect wallet',
        connectedTo: 'Connected to',
        disconnect: 'Disconnect',
      },
      connect: 'Connect to wallet',
    },
    notifications: {
      'erc20.approve': {
        pending: 'Approving %{amount} transfer. Pending',
        success: 'Approving %{amount} transfer. Successful',
        error: 'Approving %{amount} transfer. Failed',
      },
      'erc20.revertApprove': {
        pending: 'Reverting approve for infinite transfers %{symbol}. Pending',
        success: 'Reverting approve for infinite transfers %{symbol}. Successful',
        error: 'Reverting approve for infinite transfers %{symbol}. Failed',
      },
      'erc20.infiniteApprove': {
        pending: 'Approving infinite transfers %{symbol}. Pending',
        success: 'Approving infinite transfers %{symbol}. Successful',
        error: 'Approving infinite transfers %{symbol}. Failed',
      },
      'ptk.claimDistributions': {
        pending: 'Withdrawing distributions. Pending',
        success: 'Withdrawing distributions. Successful',
        error: 'Withdrawing distributions. Failed',
      },
      'liquidity.sellPtk': {
        pending: 'Withdrawing %{amount} from the pool. Pending',
        success: 'Withdrawing %{amount} from the pool. Successful',
        error: 'Withdrawing %{amount} from the pool. Failed',
      },
      'liquidity.buyPtk': {
        pending: 'Transferring %{amount} to the pool. Pending',
        success: 'Transferring %{amount} to the pool. Successful',
        error: 'Transferring %{amount} to the pool. Failed',
      },
      'defi.withdrawInterest': {
        pending: 'Withdrawing yield. Pending',
        success: 'Withdrawing yield. Successful',
        error: 'Withdrawing yield. Failed',
      },
      'loan.addPledge': {
        pending: 'Adding pledge for the loan. Pending',
        success: 'Adding pledge for the loan. Successful',
        error: 'Adding pledge for the loan. Failed',
      },
      'loan.unstakePledge': {
        pending: 'Withdrawing pledge from the loan. Pending',
        success: 'Withdrawing pledge from the loan. Successful',
        error: 'Withdrawing pledge from the loan. Failed',
      },
      'loan.withdrawUnlockedPledge': {
        pending: 'Withdraw unlocked stake and earn from the loan. Pending',
        success: 'Withdraw unlocked stake and earn from the loan. Successful',
        error: 'Withdraw unlocked stake and earn from the loan. Failed',
      },
      'loan.createProposal': {
        pending: 'Creating a loan proposal. Pending',
        success: 'Creating a loan proposal. Successful',
        error: 'Creating a loan proposal. Failed',
      },
      'loan.executeProposal': {
        pending: 'Loan activation. Pending',
        success: 'Loan activation. Successful',
        error: 'Loan activation. Failed',
      },
      'loan.cancelProposal': {
        pending: 'Canceling a loan proposal. Pending',
        success: 'Canceling a loan proposal. Successful',
        error: 'Canceling a loan proposal. Failed',
      },
      'loan.liquidateDebt': {
        pending: 'Loan liquidation. Pending',
        success: 'Loan liquidation. Successful',
        error: 'Loan liquidation. Failed',
      },
      'loan.repay': {
        pending: 'Loan repaying. Pending',
        success: 'Loan repaying. Successful',
        error: 'Loan repaying. Failed',
      },
    },
    sellShare: {
      buttonTitle: 'Withdraw',
      formTitle: 'Withdraw',
      placeholder: 'Enter sum starting from %{amount}',
      confirmMessage: 'Are you sure you want withdraw %{sourceAmount}?',
      interestConfirmation:
        ' Additional ~%{interestAmount} will be deducted from your available balance as a payment for the the accumulated interest on your outstanding loans. Full amount to be written off from your available balance will be ~%{fullAmount}.',
    },
    buyShare: {
      buttonTitle: 'Deposit',
      formTitle: 'Deposit',
      placeholder: 'Enter sum starting from %{amount}',
      confirmMessage: 'Are you sure you want deposit %{sourceAmount}?',
    },
    giveStake: {
      buttonTitle: 'Stake',
      formTitle: 'Stake',
      description: 'The more money you invest, the more the interest share you receive',
      placeholder: 'Enter sum starting from %{amount}',
      confirmMessage:
        'Are you sure you want to stake %{sourceAmount}? Your interest share will increase by %{interestShareDelta}',
    },
    createLoanProposal: {
      buttonTitle: 'Borrow',
      formTitle: 'Get loan',
      amountPlaceholder: 'Enter sum starting from %{amount}',
      amountLabel: 'Loan sum',
      percentPlaceholder: 'Enter percent value starting from %{percent}',
      percentLabel: 'Percent',
      descriptionPlaceholder: 'Enter reason',
      descriptionLabel: 'Reason',
      confirmMessage:
        'Are you sure you want get loan %{sourceAmount} with collateral %{collateral}?',
    },
    repayLoan: {
      buttonTitle: 'Repay',
      formTitle: 'Repay',
      placeholder: 'Enter sum',
      confirmMessage:
        'Are you sure you want to repay %{sourceAmount}? Loan body: ~%{body}, interest: ~%{interest}',
      fields: {
        repaymentMethod: {
          fromOwnBalance: 'from own balance',
          fromAvailablePoolBalance: 'from available pool balance',
        },
      },
      insufficientBalanceError: 'Insufficient balance. You have only %{value}.',
    },
    unstake: {
      buttonTitle: 'Unstake',
      formTitle: 'Unstake',
      placeholder: 'Enter sum',
      confirmMessage:
        'Are you sure you want to unstake %{sourceAmount}? Your interest share will decrease by %{interestShareDelta}',
    },
    changeLoanState: {
      activateLoanButton: {
        confirmMessage:
          'Are you sure you want to activate a loan? Please note that your loan will be transferred directly to your wallet.',
      },
      cancelProposalButton: {
        confirmMessage: 'Are you sure you want to cancel a loan proposal?',
      },
      liquidateLoanButton: {
        confirmMessage: 'Are you sure you want to liquidate a loan?',
      },
      unlockCollateralButton: {
        buttonTitle: 'Unlock',
        confirmMessage:
          'Are you sure you want to withdraw unlocked stake %{pledgeForUnlock} and earn %{earnForUnlock}?',
      },
      exchangingForm: {
        cancelButtonText: 'Cancel',
        submitButtonText: 'Submit',
        givenAmountText: 'You get ~%{formattedAmount}',
        targetAmountError: 'Please wait until amount is calculated',
      },
      exchangingConfirmation: {
        title: 'Confirm action',
        no: 'No',
        yes: 'Yes',
      },
    },
    distributions: {
      claimsList: {
        notFound: 'Claims not found',
        date: 'Date',
        address: 'Address',
        claimed: 'Claimed',
      },
      eventsList: {
        notFound: 'Distributions not found',
        date: 'Date',
        distribution: 'Distribution',
        claimed: 'Claimed',
        members: 'Members',
        showClaimsButton: 'Show claims',
      },
      accumulated: 'Accumulated',
      untilTheNextDistribution: 'Time to Next Distribution',
      awaitingDistribution: 'Awaiting distribution',
      withdrawButton: 'Withdraw my distributions',
      withdrawConfirmationMessage:
        'Are you sure you want to withdraw %{distributions} from distributions? This happens automatically when you change your balance.',
    },
    networkWarning: {
      title: 'You are connected to the wrong network',
      warning:
        'You are connected to the wrong network. Please choose %{name} to proceed to %{type}',
      disconnectButton: 'Disconnect',
      networkName: {
        1: 'Main Ethereum Network',
        4: 'Rinkeby Network',
      },
      networkType: {
        1: 'mainnet',
        4: 'testnet',
      },
    },
    balance: {
      changes: {
        notFound: 'Balance changes not found',
        date: 'Date',
        type: 'Action',
        amount: 'Amount',
        types: {
          DEPOSIT: 'Deposit',
          WITHDRAW: 'Withdraw',
        },
      },
      earnings: {
        notFound: 'Earnings not found',
        date: 'Date',
        type: 'Type',
        amount: 'Amount',
        types: {
          DEBT_INTEREST: 'Loan interest',
          POOL_DISTRIBUTIONS: 'Pool distribution',
        },
      },
    },
    loans: {
      loansList: {
        myLoans: 'My loans',
        others: 'Others',
      },
      loansPanel: {
        notFound: 'Loans not found',
        address: 'Address',
        loan: 'Loan',
        duePayment: 'Due payment',
        borrowApr: 'Borrow APR',
        earn: 'Earn',
        status: 'Status',
        myStake: 'My stake',
        myInterestShare: 'Interest share',
        paymentDate: 'Payment date',
        statuses: {
          PROPOSED: '%{pledgeProgress}% staked',
          EXECUTED: 'executed',
          PARTIALLY_REPAYED: 'partially repayed',
          CLOSED: 'closed',
        },
      },
      myStakes: {
        noOutstandingLoans:
          "You don't have outstanding loans at the moment. Wait for borrowers to activate pending loans you have a stake in, or just chill like this cat",
        noPendingLoans:
          'There is no pending loans you have a stake in at the moment. Search for new proposals!',
        lendButton: 'Lend',
      },
      myBorrows: {
        noCurrentLoans: "You don't have any active loans at the moment. Chill!",
        noPendingLoans:
          "You don't have any pending loans at the moment. If you wish to make a loan request — be prepared to stake 50% of collateral",
        borrowButton: 'Borrow',
      },
    },
    infiniteApprove: {
      text:
        'Preapprove the contract to be able to spend any amount of your coins. You will not need to approve again & sign additional transactions each time.',
    },
  },
  utils: {
    validation: {
      isRequired: 'Field is required',
      moreThen: 'Should be more then %{value}',
      moreThenOrEqual: 'Should be more then or equal %{value}',
      lessThenOrEqual: 'Should be less then or equal %{value}',
      notDefault: 'Value must be different from initial',
      maxStringLength: 'Text should be less then %{max} letters',
      onEnglishPlease: 'Should contain only english letters, numbers and ",.!:\'""',
      isNumber: 'Enter a valid number',
      decimalsMoreThen: 'Enter a valid number with decimals less than %{decimals} digits',
      mustBeAnInteger: 'Enter an integer',
      isPositiveNumber: 'Must be positive number',
    },
  },
  components: {
    pagination: {
      currentPagination: '%{from}-%{to}',
      ofTotal: 'of %{total}',
      currentSubgraphPagination: '%{from} - %{to}',
    },
    metrics: {
      akro: {
        description: 'Here is a title description',
      },
      myBalance: {
        myBalance: 'My balance (USD)',
        deposit: 'Deposit',
        description: 'Here is a title description',
      },
      myPoolShare: {
        myPoolShare: 'My Pool Share',
        totalPoolLiquidity: 'Total Pool Liquidity',
        description: 'Here is a title description',
      },
      apy: {
        description: 'Here is a title description',
        withdraw: 'Withdraw',
      },
      allMyIssuedLoans: {
        label: 'Overall loans issued by me',
      },
      overallAPY: {
        label: 'Overall APY',
      },
      risk: {
        label: 'Risk',
        description: 'Risk description',
      },
      outstandingLoans: {
        label: 'Outstanding loans',
        description: 'Outstanding loans description',
      },
      activeAPYFromOutstandingLoans: {
        label: 'Active APY from outstanding loans',
        description: 'Outstanding loans description',
      },
      poolSize: {
        poolSize: 'Pool size',
        established: 'Established',
      },
      dayChange: '24h Change',
      poolAPY: 'Pool APY',
      averageLoanAPY: 'Average Loan APY',
      activeMembers: 'Active Members',
      averageLoanSize: 'Average Loan Size',
      loanVolumeGranted: 'Loan Volume Granted',
      loanVolumeRequested: 'Loan Volume Requested',
      loanApprovalRatio: 'Loan Approval Ratio',
      totalValueLocked: 'Total Value Locked',
      totalAKROEarned: 'Total AKRO Earned',
      averagePassiveAPY: 'Average passive APY',
      averageAPY: 'Average APY',
      proposals: 'Proposals',
      averageLoanTerm: 'Average Loan Term',
      availableForBorrowing: 'Maximum Available for Borrowing',
      totalBorrowed: 'Total Borrowed',
      minimumAPY: 'Minimum APY',
      loanTerm: 'Loan Term',
    },
    portfolioSnapshot: {
      caption: 'Portfolio Snapshot',
      asset: 'Asset',
      apy: 'APY',
      earned: 'Earned',
      balance: 'Balance',
      description: 'Here is a title description',
      loansIssued: 'Loans Issued',
    },
    yield: {
      title: 'Yield',
    },
    poolBalanceChart: {
      ptkDepositPrice: 'ASPT Deposit Price',
      ptkWithdrawalPrice: 'ASPT Withdrawal Price',
    },
    poolCompositionChart: {
      poolComposition: 'Pool Composition',
    },
    availableLoansChart: {
      totalAvailable: 'Total Available for Loans',
    },
    deFiScoreChart: {
      deFiScore: 'DeFi Score',
    },
  },
};

export { en };
