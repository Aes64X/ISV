define Device/generic
  DEVICE_TITLE := Generic x86/64
  DEVICE_PACKAGES += kmod-e1000e kmod-e1000 kmod-igb \
	kmod-ixgbe
  GRUB2_VARIANT := generic
endef
TARGET_DEVICES += generic
